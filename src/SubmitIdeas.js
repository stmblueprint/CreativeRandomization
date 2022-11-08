
import React from "react";



export default function SubmitIdeas(){




    return(
        <>

         <div className="center form-container">
            <form>
                <div className="tip">
                  Tip: Your idea will be added to the generator after being reviewed.    
                </div>

                <label>Enter your idea:</label><br/>
                <input type="text" name="idea-input"/>
                <input type="submit" name="submit" value="Submit Idea"/>
            </form>
         </div>
        
        </>)
}