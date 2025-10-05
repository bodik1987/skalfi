type FirmProps = {
  title: string;
  section: string;
  position: string;
};

export interface IUser {
  id: string;
  name: string;
  firm: FirmProps;
  startDate: string;
}
