"use client";
import React from 'react';
import Carousel from "react-material-ui-carousel"
import Image from 'next/image'


function Assessment() {
  var items: ItemProps[] = [
    {
      name: "Intersecting images, overlapping figures",
      path: "/poppelreuter-ghent-overlapping-figure.png"
    },
    {
      name: "Navon figure 1",
      path: "/navon-figure-1.png"
    },
    {
      name: "Navon figure 2",
      path: "/navon-figure-2.png"
    },
    {
      name: "Non-cursive writing",
      path: "/non-cursive.png"
    },
    {
      name: "Cursive writing",
      path: "/cursive.png"
    },
  ]

  return (
    <div className='h-full w-full'>
      <Carousel
        autoPlay={false}
        height={500}
        navButtonsAlwaysVisible={true}
        animation="slide"
        duration={0}
        cycleNavigation={false}
        sx={{
          margin: '20px',
        }}
        indicatorContainerProps={{
          style: {
            zIndex: 1,
            marginTop: "10px",
            position: "relative"
          }
        }}
      >
        {
          items.map((item, i) => <AssessmentItem key={i} {...item} />)
        }
      </Carousel>
    </div >
  )
}

interface ItemProps {
  name: string,
  path: string
}

function AssessmentItem(props: ItemProps) {
  return (
    <div className='mr-5 ml-5'>
      <Image src={props.path}
        alt={props.name}
        fill={true}
        objectFit='contain'
      />
    </div>
  )
}


export { Assessment }