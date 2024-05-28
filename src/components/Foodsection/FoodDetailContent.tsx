import Link from '@mui/material/Link';
// import Spinner from "../Common/Loader"
import YouTubeIcon from '@mui/icons-material/YouTube';
import LanguageIcon from '@mui/icons-material/Language';

interface itesAction {
    items: any,
    BenifitsOffood: any
}
export default function FoodContent({ items, BenifitsOffood }: itesAction) {
    console.log(items, "Dfffffffffff")
    return (
        <div className='section_Details'>
            <h3>Benifits of {items.strMeal}</h3>
            {
                BenifitsOffood.map((items: any, index: any) => (
                    <span key={index}>{items.benifits}</span>
                ))
            }
            <h3>Instructions</h3>
            <span>{items.strInstructions}</span>
            <h3>Necessary Materials</h3>
            <ol><li>{items.strIngredient1}</li>
                <li>{items.strIngredient2}</li>
                <li>{items.strIngredient3}</li>
                <li>{items.strIngredient4}</li>
                <li>{items.strIngredient5}</li>
                <li>{items.strIngredient6}</li>
            </ol>
            <div className='moredetails'>
                <small>Get more Details &nbsp;</small>

                <label>
                    <Link href={items.strSource} target="#">
                        <LanguageIcon />
                    </Link>

                    <Link href={items.strYoutube} target="#">
                        <YouTubeIcon />
                    </Link>
                </label>
            </div>
        </div>
    )
}