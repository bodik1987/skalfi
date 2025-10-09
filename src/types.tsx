type FirmProps = {
  title: string;
  section: string;
  position: string;
};

type DocProps = {
  id: string;
  type: "vacation" | "time";
  dateOfGeneration: string;
  dateOfBegin: string;
  dateOfEnd: string;
  status: "submitted" | "confirmed" | "rejected";
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
  freeDays?: string[];
}
