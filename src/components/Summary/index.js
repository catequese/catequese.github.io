import React from 'react';

import FeaturedImage from '../FeaturedImage';
import H1 from '../H1';
import P from '../P';
import Wrapper from './Wrapper';
import Link from './Link';
import Date from './Date';
import ContinueReading from './ContinueReading';

function Summary({date, title, excerpt, slug, image}) {
  return (
    <Wrapper>
        {image &&
          <Link to={slug}>
            <FeaturedImage sizes={image.childImageSharp.sizes}/>
          </Link>
        }
        <H1><Link to={slug}>{title}</Link></H1>
        <Date>{date}</Date>
        <P>{excerpt}</P>
        <div style={{textAlign: "right", width: "100%"}} >
          <ContinueReading to={slug}>Continue lendo... &rarr;</ContinueReading>
        </div>
    </Wrapper>
  );
}

export default Summary;