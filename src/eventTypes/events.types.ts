export type Event = {
  id: number;
  title: string;
  date: Date;
  price: number;
  favorite?: boolean;
};

export type EventDetails = {
  price: number;
  title: string;
  date: Date;
  place: string;
  organizer: string;
  description: string;
};
