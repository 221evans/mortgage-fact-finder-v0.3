"use client"
import {useState} from "react";
import {pageList} from "@/app/data";
import FirstPage from "@/app/Components/FirstPage";
import SecondPage from "@/app/Components/SecondPage";
import ThirdPage from "@/app/Components/ThirdPage";
import {Button} from "react-bootstrap";
export default function Home() {

    const [index, setIndex] = useState(0);

    function handleNextClick(): void{
        if (index < pageList.length -1){
            setIndex(index + 1);
            console.log(index);
        }
    }

    function handleBackClick(): void{
        if (index > 0){
            setIndex(index - 1);
        }
    }


    function handleButton(){
        if (index < pageList.length-1){

            return(
                <div className="d-flex justify-content-center">
                    <Button className="m-3" variant="primary" onClick={handleBackClick}>Back</Button>
                    <Button className="m-3" variant="primary" onClick={handleNextClick}>Next</Button>
                </div>

            )
        }
        else {
            return (
                <div>
                    <Button className="m-3" variant="primary" onClick={handleBackClick}>Back</Button>
                    <Button className="m-3" variant="success" onClick={handleSubmit}>Submit</Button>
                </div>

            )
        }
    }


    function handlePageRendering(){

        switch(index) {
            case 0:
                return <FirstPage />;
            case 1:
                return <SecondPage />;
            case 2:
                return <ThirdPage />;
            case 3:
                return <h1 className="text-center">Placeholder for fourth page</h1>;
            case 4:
                return <h1 className="text-center">Placeholder for fifth page</h1>;
            default:
                return <FirstPage />;
        }
    }

    function handleSubmit(): void{
        // Placeholder for now
        alert("Submitted!")

    }


  return (
      <>
        <h1 className="text-center mt-4">Mortgage Fact Find</h1>

          <div className="text-center">
              <h1 className="mt-4">{pageList[index].text}</h1>
              <h3 className="mt-4">({index + 1} of {pageList.length})</h3>
          </div>

          <div>
              {handlePageRendering()}
          </div>
          <div className="d-flex justify-content-center mt-4 ml">
              {handleButton()}

          </div>

      </>
  );
}
