import React, {useState, useEffect} from 'react'
import "./App.css"
import Avatar from "./components/Avatar"
import PartList from './components/PartList'

const total = {
    body: 17,
	eyes: 24,
	hair: 73,
    facial_hair: 17,
    earrings: 32,
    neckwear: 18,
	mouth: 24,
	eyebrows: 15,
	hats: 28,
	glasses: 17,
	clothing1: 5,
	clothing2: 5,
	clothing3: 9,
}

function App() {
    const [body, setBody] = useState(0)
    const [eyes, setEyes] = useState(0)
    const [hair, setHair] = useState(0)
    const [facial_hair, setFacialhair] = useState(0)
    const [earrings, setEarrings] = useState(0)
    const [neckwear, setNeckwear] = useState(0)
    const [mouth, setMouth] = useState(0)
    const [eyebrows, setEyebrows] = useState(0)
    const [hats, setHats] = useState(0)
    const [glasses, setGlasses] = useState(0)
    const [clothing1, setClothing1] = useState(0)
    const [clothing2, setClothing2] = useState(0)
    const [clothing3, setClothing3] = useState(0)
    const randomize = () => {
        setBody(Math.floor(Math.random() * total.body))
        setEyes(Math.floor(Math.random() * total.eyes))
        setHair(Math.floor(Math.random() * total.hair))
        setFacialhair(Math.floor(Math.random() * total.facial_hair))
        setEarrings(Math.floor(Math.random() * total.earrings))
        setNeckwear(Math.floor(Math.random() * total.neckwear))
        setMouth(Math.floor(Math.random() * total.mouth))
        setEyebrows(Math.floor(Math.random() * total.eyebrows))
        setHats(Math.floor(Math.random() * total.hats))
        setGlasses(Math.floor(Math.random() * total.glasses))
        setClothing1(Math.floor(Math.random() * total.clothing1))
        setClothing2(Math.floor(Math.random() * total.clothing2))
        setClothing3(Math.floor(Math.random() * total.clothing3))
    }
    useEffect(() => {
        randomize()
    },[])
  return (
    <div className="App">
        <div className="title">CHARACTER</div>
        <div className='subtitle'>💃CUSTOMIZATION🕺</div>
        <div className='divider'></div>
        <div className='avatar-group gap-30'>
            <div>
                <div className='avatar-wrapper'>
                    <Avatar
                    body={body}
                    eyes={eyes}
                    hair={hair}
                    facial_hair={facial_hair}
                    earrings={earrings}
                    neckwear={neckwear}
                    mouth={mouth}
                    eyebrows={eyebrows}
                    hat={hats}
                    glasses={glasses}
                    clothing1={clothing1}
                    clothing2={clothing2}
                    clothing3={clothing3}
                    />
                    <div className="text-center">
                        <button className="button" onClick={()=> randomize()}>Randomize!</button>
                    </div>
                </div>
            </div> 
            <div>
                <div className="list-section">
                    <h2>Body</h2>
                    <PartList
                    total={total.body}
                    path="body"
                    set={setBody}
                    selected={body}
                    />
                </div>
                <div className="list-section">
                    <h2>Eyes</h2>
                    <PartList 
                    total={total.eyes}
                    path="eyes"
                    set={setEyes}
                    selected={eyes}
                    />
                </div>
                <div className="list-section">
                    <h2>Hair</h2>
                    <PartList 
                    total={total.hair}
                    path="hair"
                    set={setHair}
                    selected={hair}
                    />
                </div>
                <div className="list-section">
                    <h2>Facial Hair</h2>
                    <PartList
                    total={total.facial_hair}
                    path="facial_hair"
                    set={setFacialhair}
                    selected={facial_hair}
                    />
                </div>
                <div className="list-section">
                    <h2>Earrings</h2>
                    <PartList 
                    total={total.earrings}
                    path="accessories/earrings"
                    set={setEarrings}
                    selected={earrings}
                    />
                </div>
                <div className="list-section">
                    <h2>Neckwear</h2>
                    <PartList 
                    total={total.neckwear}
                    path="accessories/neckwear"
                    set={setNeckwear}
                    selected={neckwear}
                    />
                </div>
                <div className="list-section">
                    <h2>Mouths</h2>
                    <PartList
                    total={total.mouth}
                    path="mouths"
                    set={setMouth}
                    selected={mouth}
                    />
                </div>
                <div className="list-section">
                    <h2>Eyesbrows</h2>
                    <PartList 
                    total={total.eyebrows}
                    path="eyebrows"
                    set={setEyebrows}
                    selected={eyebrows}
                    />
                </div>
                <div className="list-section">
                    <h2>Hat</h2>
                    <PartList 
                    total={total.hats}
                    path="accessories/hats"
                    set={setHats}
                    selected={hats}
                    />
                </div>
                <div className="list-section">
                    <h2>Glasses</h2>
                    <PartList 
                    total={total.glasses}
                    path="accessories/glasses"
                    set={setGlasses}
                    selected={glasses}
                    />
                </div>
                <div className="list-section">
                    <h2>Clothing 1</h2>
                    <PartList
                    total={total.clothing1}
                    path="clothes/layer_1"
                    set={setClothing1}
                    selected={clothing1}
                    />
                </div>
                <div className="list-section">
                    <h2>Clothing 2</h2>
                    <PartList
                    total={total.clothing2}
                    path="clothes/layer_2"
                    set={setClothing2}
                    selected={clothing2}
                    />
                </div>
                <div className="list-section">
                    <h2>Clothing 3</h2>
                    <PartList
                    total={total.clothing3}
                    path="clothes/layer_3"
                    set={setClothing3}
                    selected={clothing3}
                    />
                </div>
            </div>     
        </div>
    </div>
  )
}

export default App
