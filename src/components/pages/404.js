
import ErrorMessage from '../errorMessage/errorMessage';
import { Link } from 'react-router-dom';

const Page404 = () => {
    return (
        <div>
          <ErrorMessage/>
          <p style={{'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px'}}>Page doesn't exist</p>
          <Link style={{'textDecoration': 'underline', 'color': 'blue','display': 'block', 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px', 'marginTop': '30px'}} to="/">Back to main page</Link>
        </div>
    );
};

export default Page404;