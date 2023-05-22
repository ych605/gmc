import React from "react";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import useMessageContext from "../../../hooks/useMessageContext";

dayjs.extend(advancedFormat);

const DateTime = () => {
  const { createdAt } = useMessageContext();
  const date = dayjs.unix(createdAt);

  return (
    <time dateTime={date.format("YYYY-MM-DD HH:mm")} data-testid={"datetime"}>
      {date.format("YYYY MMM Do h:mm A")}
    </time>
  );
};

export default DateTime;
