import {StyleProp, ViewStyle} from 'react-native';

export type ContainerStyle = {
  containerStyle?: StyleProp<ViewStyle>;
};

export type Event = {
  price: string;
  title: string;
  date: string;
  hour: string;
  place?: string;
  organizer?: string;
  description?: string;
};

export type EventDetailProps = {
  event: Event;
} & ContainerStyle;

export type InfoWithIconProps = {
  icon: JSX.Element;
  title: string;
  subTitle?: string;
  textColor: string;
  fontWeight?: 'normal' | 'bold';
};

export type Tab = {label: string; key: string};

export type TabsProps = {
  tabs: Tab[];
  currentTab: string;
} & ContainerStyle;
