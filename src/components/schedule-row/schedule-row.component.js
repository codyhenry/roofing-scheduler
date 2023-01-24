//one row of the schedule
import { Header, Row, Column } from "./schedule-row.styles";
import { Spacer } from "../spacer/spacer.component";

export const ScheduleRow = (props) => {
  const slot = props.slot;
  const timeZone = props.time;
  console.log(slot);
  const { customer, city, time } = slot;
  return (
    //time|name|city|edit and drag icons
    <Row>
      <Column>{timeZone}</Column>
      <Column>
        {customer}
        <Spacer />
        {time || null}
      </Column>
      <Column>{city}</Column>
      <Column>EDIT</Column>
    </Row>
  );
};

export const ScheduleHeader = () => {
  return (
    <Header>
      <Column>Time</Column>
      <Column>Customer</Column>
      <Column>City</Column>
      <Column>EDIT</Column>
    </Header>
  );
};
