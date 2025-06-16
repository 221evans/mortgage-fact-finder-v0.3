"use client"
import {useState} from "react";
import {pageList} from "@/app/data";
import FirstPage from "@/app/Components/FirstPage";
export default function Home() {

    const [index, setIndex] = useState(0);

    function handleNextClick(){
        if (index < pageList.length -1){
            setIndex(index + 1);
            console.log(index);
        }
    }

    function handleButton(){
        if (index < pageList.length-1){

            return(
                <button onClick={handleNextClick}>Next</button>
            )
        }
        else {
            return (
                <button>Submit</button>
            )
        }
    }

    function handlePageRendering(){

        switch(index) {
            case 0:
                return <FirstPage />;
            case 1:
                return <h1>Placeholder for second page</h1>;
            case 2:
                return <h1>Placeholder for third page</h1>;
            default:
                return <FirstPage />;
        }
    }


  return (
      <>
        <h1 className="text-center mt-4">Mortgage Fact Finder</h1>

          <div className="text-center">
              <h1 className="mt-4">{pageList[index].text}</h1>
              <h3 className="mt-4">({index + 1} of {pageList.length})</h3>
          </div>

          <div>
              {handlePageRendering()}
          </div>
          <div className="d-flex justify-content-center mt-4">
              {handleButton()}
          </div>
      </>
  );
}
