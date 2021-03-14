import { TCoinMetricsData } from "../TCoinMetricsData";
import { TCoinProfileData } from "../TCoinProfileData";

export type TCoinSummaryProps = {
    coinProfileData: TCoinProfileData | undefined;
    coinMetricsData: TCoinMetricsData | undefined;
}