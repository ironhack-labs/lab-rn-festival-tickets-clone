import { ImageRequireSource } from "react-native";

export interface SimilarEvent {
    id: number
    image: ImageRequireSource,
    title: string,
    price: string,
    dateTime: string,
}