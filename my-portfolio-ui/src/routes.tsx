import { BrowserRouter, Route, Routes} from 'react-router-dom'
import { PortfolioScreenContainer } from './screens/portfolio'

const RoutesComponent = () => {
    return (
        <BrowserRouter basename={'/portfolio'}>
            <Routes>
                <Route path={'/'} element={<PortfolioScreenContainer/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesComponent