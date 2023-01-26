//one row of the schedule
import { Header, Row, Column } from "./schedule-row.styles";
import { EditableText, EditableSelect } from "./editable-cell.component";
import { Spacer } from "../spacer/spacer.component";

export const ScheduleRow = (props) => {
  const slot = props.slot;
  const timeZone = props.timeframe;
  const { customer, city, time } = slot;
  return (
    //time|name|city|edit and drag icons
    <Row rowColor={timeZone === "10-2" && "white"}>
      <Column>{timeZone}</Column>
      <Column>
        <EditableText value={customer} />
        <Spacer />
        {time || null}
      </Column>
      <Column>
        <EditableSelect value={city} />
      </Column>
      <Column>
        <EditableText value={time} />
      </Column>
    </Row>
  );
};

export const ScheduleHeader = () => {
  return (
    <Header>
      <Column></Column>
      <Column>Customer</Column>
      <Column>City</Column>
      <Column>Notes</Column>
    </Header>
  );
};
