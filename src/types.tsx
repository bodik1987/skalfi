type FirmProps = {
  title: string;
  section: string;
  position: string;
};

type DocProps = {
  id: string;
  title: string;
  type: "vacation" | "time";
  dateOfGeneration: Date;
  dateOfBegin: Date;
  dateOfEnd: Date;
  status: "submitted" | "Confirmed" | "Rejected";
  comment: string;
};

export interface IUser {
  id: string;
  name: string;
  firm: FirmProps;
  startDate: string;
  docs?: DocProps[];
  vocationHours: number[];
  vocationChildrenDays: number[];
}
