import {Button}  from "@mui/material";
import {getAllProducts} from "../api/products.api";
import {useState, useEffect} from "react";
import {Container, Grid, Divider, TextField, CircularProgress} from "@mui/material";  
import SearchIcon from '@mui/icons-material/Search';
import Feed from "../components/Feed";

function HomePages (props) {
    const [products, setProducts] = useState([]);
    const [serchTerm, setSerchTerm] = useState('');
    const [load, setLoad] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);
    
    const handleFilter = () => {
        serchTerm ? fetchData(serchTerm) : fetchData('');
    }

    const fetchData = (param) => {
        setLoad(true);
        getAllProducts(param).then((response) => {
            setProducts(response.data);
            setLoad(false);
        });
    }

    return (
        <Container>
            <TextField
                backgroundcolor="blue"
                placeholder="Escriba su busqueda"
                value={serchTerm}
                onChange={(e)=> setSerchTerm(e.target.value)}
            ></TextField>
            <Button onClick={handleFilter} variant="outlined" startIcon={<SearchIcon />} > Buscar </Button>
            {load ?
                <CircularProgress style={{ marginTop: 20}} />
                :
                <Grid container spacing={4}>
                    {products.map((product, idx) => (
                    <Grid item key={idx} xs={12} sm={6} md={4} lg={3} >
                        <Feed product={product} />
                    </Grid>
                    ))}
                    </Grid>
                }
            <Divider style={{ marginBottom: 30}}/>
        </Container>
    );
}

export default HomePages;