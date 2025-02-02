import React from 'react'
import Part from "./Part"

const Avatar = ({
        body,
        eyes,
        hair,
        facial_hair,
        earrings,
        neckwear,
        mouth,
        eyebrows,
        hat,
        glasses,
        clothing1,
        clothing2,
        clothing3,
    },ref) => {
        return (
            <div className="avatar">
                <Part path="noses" index={0} zIndex={1} />
                <Part path="body" index={body} zIndex={0} />
                <Part path="eyes" index={eyes} zIndex={1} />
                <Part path="hair" index={hair} zIndex={2} />
                <Part path="facial_hair" index={facial_hair} zIndex={1} />
                <Part path="accessories/earrings" index={earrings} zIndex={2} />
                <Part path="accessories/neckwear" index={neckwear} zIndex={2} />
                <Part path="mouths" index={mouth} zIndex={1} />
                <Part path="eyebrows" index={eyebrows} zIndex={1} />
                <Part path="accessories/hats" index={hat} zIndex={3} />
                <Part path="accessories/glasses" index={glasses} zIndex={1} />
                <Part path="clothes/layer_1" index={clothing1} zIndex={0} />
                <Part path="clothes/layer_2" index={clothing2} zIndex={1} />
                <Part path="clothes/layer_3" index={clothing3} zIndex={2} />
            </div>
        )
     }



export default Avatar
