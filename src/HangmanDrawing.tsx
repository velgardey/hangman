const Head = (
    <div style={{
        background: '#dbdfac',
        width: '50px',
        height: "50px",
        borderRadius: '100%',
        border: '10px solid #dbdfac',
        position:'absolute',
        top: '50px',
        right: '-30px'

    }} />
)

const MainBody = (
    <div style={{
        height: '100px',
        width: '10px',
        position:'absolute',
        background: '#dbdfac',
        top: '115px',
        right: '0'
    }} />
)

const RightArm = (
    <div style={{
        width : '100px',
        height: '10px',
        background: '#dbdfac',
        position: "absolute",
        top: '155px',
        right: '-90px',
        rotate: '30deg',
        transformOrigin: 'left-bottom'
    }}/>
)

const LeftArm = (
    <div style={{
        width: '100px',
        height: '10px',
        background: '#dbdfac',
        position: "absolute",
        top: '155px',
        right: '0px',
        rotate: '-30deg',
        transformOrigin: 'left-bottom'
    }
    } />
)

const LeftLeg = (
    <div style={{
        width: '100px',
        height: '10px',
        background: '#dbdfac',
        position: "absolute",
        top: '250px',
        right: '-60px',
        rotate: '70deg',
        transformOrigin: 'left-bottom'
    }} />
)

const RightLeg = (
    <div style={{
        width: '100px',
        height: '10px',
        background: '#dbdfac',
        position: "absolute",
        top: '250px',
        right: '-28px',
        rotate: '-70deg',
        transformOrigin: 'right-top'
    }} />
)

const BodyParts = [ Head, MainBody, RightArm, LeftArm, RightLeg, LeftLeg ]

type HangmanDrawingProps = {
    numberOfGuesses: number
}
export function HangmanDrawing( {numberOfGuesses} : HangmanDrawingProps) {
    return <div style={{position: "relative"}}>

        {BodyParts.slice(0, numberOfGuesses)}

        <div style={{ height: '60px', width: '10px', background: '#dbdfac', position:'absolute', top: 0, right: 0}}></div>

        <div style={{ height: '10px', width: '200px', background: '#dbdfac', marginLeft: '120px'}}></div>

        <div style={{ height: '400px', width: '10px', background: '#dbdfac', marginLeft: '120px'}}></div>

        <div style={{ height: '10px', width: '250px', background: '#dbdfac'}}></div>

    </div>
}