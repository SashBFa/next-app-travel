import Link from "next/link";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import millify from 'millify';

const Article = ({ article }: any) => {
  return (

    <Card sx={{ width: 250, height: 500 }}>
      <CardMedia
      sx={{
        borderRadius: 2,
        p: 8,
      }}
        component="img"
        image={article.iconUrl}
        alt={article.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {article.rank}. {article.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            <p>Price: {millify(article.price)}</p>
            <p>Market Cap: {millify(article.marketCap)}</p>
            <p>Daily Change: {article.change}%</p>
        </Typography>
      </CardContent>
      <CardActions>
      <Link href="/article/[id]" as={`/article/${article.uuid}`}>
        <a className="article">
          <Button size="small">Learn More</Button>
        </a>
      </Link>
      </CardActions>
    </Card>
  );
};

export default Article;
