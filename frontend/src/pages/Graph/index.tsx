import React, { useState, useEffect, useContext } from "react";
import { Col, Row, Card, CardBody } from "reactstrap";
import Select from "react-select";

import { EnhancedBar } from "../../components/Charts/EnhancedBar";
import { propertyLists, propertyView } from "../../services/propertyData";
import { Context } from "../../context/Context";

export const Graph: React.FC = () => {
  const { state } = useContext(Context);
  const [month, setMonth] = useState<string[]>([]);
  const [income, setIncome] = useState<number[]>([]);
  const [expense, setExpense] = useState<number[]>([]);
  const [lists, setLists] = useState<string[]>([]);
  const [propertyId, setPropertyId] = useState<number>(0);

  useEffect(() => {
    (async function resources() {
      const { status, data } = await propertyLists(state.accessToken);

      if (status === 200) {
        setLists(data.data);
      }
    })();
  }, [state.accessToken]);

  useEffect(() => {
    if (propertyId) {
      (async function resources() {
        const {
          status,
          data: { data },
        } = await propertyView(propertyId, state.accessToken);

        const income_label = Object.keys(data.income);
        const income_value: number[] = Object.values(data.income);
        const expense_value: number[] = Object.values(data.expense);
        if (status === 200) {
          setMonth(income_label);
          setIncome(income_value);
          setExpense(expense_value);
        }
      })();
    }
  }, [propertyId, state.accessToken]);

  const handleChange = (e: { propertyId: number; propertyName: string }) => {
    setPropertyId(e.propertyId);
  };

  return (
    <Col lg={10}>
      <Row>
        <Col lg={12}>
          <h3 className="page-title">Graph</h3>
        </Col>
      </Row>
      <Row>
        <Col lg={10}>
          <Card>
            <CardBody>
              <Col lg={4}>
                {lists.length > 0 && (
                  <Select
                    options={lists.map((item: any) => ({
                      propertyId: item.propertyId,
                      propertyName: item.propertyName,
                    }))}
                    getOptionLabel={(option: any) => {
                      return option.propertyName;
                    }}
                    getOptionValue={(option: any) => {
                      return option;
                    }}
                    placeholder={"Search property..."}
                    onChange={handleChange}
                  />
                )}
              </Col>
              <Col className="page-graph">
                <EnhancedBar
                  labels={month}
                  label1={"Expense"}
                  label2={"Income"}
                  data1={expense}
                  data2={income}
                />
              </Col>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Col>
  );
};
