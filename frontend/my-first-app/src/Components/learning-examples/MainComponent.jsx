import FirstComponent from "./FirstComponent";
import { SecondComponent } from "./FirstComponent";
import { ThirdComponent } from "./FirstComponent";

export function MainComponent(){
    return(
        <div className="MainComponent">
            <FirstComponent></FirstComponent>
            <SecondComponent></SecondComponent>
            <ThirdComponent></ThirdComponent>
        </div>
    )
}    