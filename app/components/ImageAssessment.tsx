"use client";
import React from 'react';
import Carousel from "react-material-ui-carousel"
import Image from 'next/image'

// TODO: stop the weird flashing behavior
function Assessment() {
  const [indicatorsVisible, setIndicatorVisibility] = React.useState(false)

  var items: ItemProps[] = [
    {
      name: "Intersecting images, overlapping figures",
      path: "/poppelreuter-ghent-overlapping-figure.png",
      onClick: () => setIndicatorVisibility(!indicatorsVisible)
    },
    {
      name: "Navon figure 1",
      path: "/navon-figure-1.png",
      onClick: () => setIndicatorVisibility(!indicatorsVisible)
    },
    {
      name: "Navon figure 2",
      path: "/navon-figure-2.png",
      onClick: () => setIndicatorVisibility(!indicatorsVisible)
    },
    {
      name: "Non-cursive writing",
      path: "/non-cursive.png",
      onClick: () => setIndicatorVisibility(!indicatorsVisible)
    },
    {
      name: "Cursive writing",
      path: "/cursive.png",
      onClick: () => setIndicatorVisibility(!indicatorsVisible)
    },
    {
      name: "Reading",
      path: "/alphanumeric/K983HMR.png",
      onClick: () => setIndicatorVisibility(!indicatorsVisible)
    },
    {
      name: "Reading",
      path: "/alphanumeric/S568BWY.png",
      onClick: () => setIndicatorVisibility(!indicatorsVisible)
    },
    {
      name: "Reading",
      path: "/alphanumeric/E732ZSC.png",
      onClick: () => setIndicatorVisibility(!indicatorsVisible)
    },
    {
      name: "Reading",
      path: "/alphanumeric/F479PRT.png",
      onClick: () => setIndicatorVisibility(!indicatorsVisible)
    }
  ]


  return (
    <div className='h-full w-full'>
      {/* <Carousel
        autoPlay={false}
        height={500}
        navButtonsAlwaysVisible={indicatorsVisible}
        animation="slide"
        duration={0}
        cycleNavigation={false}
        sx={{
          margin: '20px',
        }}
        indicatorContainerProps={{
          style: {
            zIndex: 1,
            marginTop: "0px",
            position: "relative"
          }
        }}
        indicators={indicatorsVisible}
      >
        {
          items.map((item, i) => <AssessmentItem key={i} {...item} />)
        }
      </Carousel> */}
    </div >
  )
}

interface ItemProps {
  name: string,
  path: string,
  onClick: () => void
}

function AssessmentItem(props: ItemProps) {
  return (
    <div className='mr-5 ml-5'>
      <Image src={props.path}
        alt={props.name}
        fill={true}
        objectFit='contain'
        onClick={props.onClick}
      />
    </div>
  )
}


export { Assessment }