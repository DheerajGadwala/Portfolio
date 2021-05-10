import React, {useEffect} from 'react';
import './style.css';

const TypingAnimation = (props)=>{

    const [display, setDisplay] = React.useState([]);

    const delay = (delay)=>{
        return new Promise (resolve=>{
            setTimeout(()=>{

                resolve();
            }, delay);
        });
    }
    
    const animate = async ()=>{
        for(var j=0; j<props.animationItems.length; j++){
            var item = props.animationItems[j];
            var currState = [];
            await delay(100);
            for(var i=0; i<item.length; i++){
                await delay(200);
                currState.push(item.charAt(i));
                setDisplay([...currState]);
            }
            await delay(500);
            for(var i=0; i<item.length; i++){
                await delay(100)
                currState.pop();
                setDisplay([...currState]);
            }
        }
    }

    useEffect(async ()=>{
        while(true){
            document.querySelector('.blinkingBar').style.animation = `blinkIn 0.5s ease forwards`;
            await delay(501);
            document.querySelector('.blinkingBar').style.animation = `blinkOut 0.5s ease forwards`;
            await delay(501);
        }
    }, []);

    useEffect(async ()=>{
        while(true)
            await animate();
    }, []);
    
    const generateDisplay = ()=>{
        var curr = [...display];
        var ret = "";
        for(var i=0; i<curr.length; i++)
            ret+=`${curr[i]}`;
        return(ret);
    }

    return(
        <>
            <div className="typingAnimation">
                <span className="totalText">
                    Who am I?&nbsp;
                    <span className="animationArea">
                        <span className="changingText">
                            {generateDisplay()}
                        </span>
                        <span className = "blinkingBar">
                            |
                        </span>
                    </span>
                </span>
            </div>
        </>
    );
}

export default TypingAnimation;