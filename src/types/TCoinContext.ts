import { TGState } from "./TGState";

export type TCoinContext = {
    gState: TGState;
    setGState(): void;
}