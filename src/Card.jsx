import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';



const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function RecipeReviewCard() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ maxWidth: 700 }} style={{marginLeft:"400px"}}>

            <CardMedia
                component="img"
                height="194"
                image="https://sacredheartsitapur.org/wp-content/uploads/2022/08/IMG20220511110836-2-scaled.jpg"
                alt="Principal"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    It is with great pleasure that I am welcoming you all to our web page www.sacredheartsitapur.
                    org for the academic session 2022-2023. I am pleased that you have taken your time to visit the Sacred Heart Hr.
                    Sec. School page. I hope, you will find our website user friendly, and after your visit you will have a good idea
                    of all we have to offer at one of the best school in India. After celebrating the Diamond Jubilee of excellence in
                    Education and serving the people of Sitapur, affiliated with the Utter Pradesh State Board, now we are affiliated to
                    C.B.S.E. Sacred Heart Inter College is now Sacred Heart Higher Secondary School. It was a public demand that made the
                    change of Board. Hearty Congratulations to you all. Real education is of educating head, hands and hearts. At Sacred
                    Heart Higher Secondary School, Sitapur, we focus on discovering, developing and drawing out hidden talents in our
                    students. Our Academic and Co-curricular activities are aimed at in making them not only good students but
                    brilliant human beings. I am extremely glad at the progress made by the school imbibing in its students
                    with the 5 “c”s i.e. Character, Competence, Conscience, Compassion and Commitment, With the change of
                    Board, I am sure that in times to come we will continue this journey with elevated enthusiasm and
                    commitment. Here at Sacred Heart, we spare no efforts to make the learning efforts of our
                    students meaningful and relevant to meet the future challenges to the society.
                </Typography>
            </CardContent>
        </Card>
    );
}
// style={{display:"flex", alignItems: "center", justifyContent:"center" }}