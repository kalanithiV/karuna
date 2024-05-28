import Link from '@mui/material/Link';
// import Spinner from "../Common/Loader"
import YouTubeIcon from '@mui/icons-material/YouTube';
import LanguageIcon from '@mui/icons-material/Language';

interface itesAction {
    items: any,
    BenifitsOffood: any,
    strIngredient1: string,
    strIngredient2: string,
    strIngredient3: string,
    strIngredient4: string,
    strIngredient5: string,
    strIngredient6: string,
    strSource: any,
    strYoutube: any
    strMeal: number,
    benifits: string,
    strInstructions:string,
}

export default function FoodContent({ 
    items, 
    BenifitsOffood,
     strMeal,
    strIngredient1, 
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strSource,strYoutube,strInstructions
 }: itesAction) {
    console.log(items, "Dfffffffffff")
    return (
        <div className='section_Details'>
            <h3>Benifits of {strMeal}</h3>
            {
                BenifitsOffood.map((items:itesAction) => (
                    <span >{items.benifits}</span>
                ))
            }
            <h3>Instructions</h3>
            <span>{strInstructions}</span>
            <h3>Necessary Materials</h3>
            <ol><li>{strIngredient1}</li>
                <li>{strIngredient2}</li>
                <li>{strIngredient3}</li>
                <li>{strIngredient4}</li>
                <li>{strIngredient5}</li>
                <li>{strIngredient6}</li>
            </ol>
            <div className='moredetails'>
                <small>Get more Details &nbsp;</small>

                <label>
                    <Link href={strSource} target="#">
                        <LanguageIcon />
                    </Link>

                    <Link href={strYoutube} target="#">
                        <YouTubeIcon />
                    </Link>
                </label>
            </div>
        </div>
    )
}