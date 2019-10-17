import React from 'react';
import ReactDOM from 'react-dom';

class Aext extends React.Component{
    render(){
        return <h1 style={this.props.style}>Hello,{this.props.name}!</h1>
        
    }
}

let title = (
    <div>
        <Aext name="abc"/>
        <Aext name="jjjjj"/>
        {/* <Aext name="jafdafo" style={{'font-size':44, 'color':'#f00'}}/>
        <Aext name="jafjfdiohoisdj" style={{'font-size':24}}/> */}
    </div>
)
ReactDOM.render(title,document.getElementById('root'))

class CheckButton extends React.Component{
    //在`class`中宣告一個事件
    writeConsole() {
        console.log('點了點了點了')
    }

    render(){
        //使用onClick指定觸發的事件
        return <input type="button" onClick={this.writeConsole} 
                value="點我看console" />
    }
}

ReactDOM.render(<CheckButton /> ,document.getElementById('root1'))

const product = {
    name: 'iPhone',
    image: 'https://i.imgur.com/b3qRKiI.jpg',
    description:
      '全面創新的三相機系統，身懷萬千本領，卻簡練易用。電池續航力突飛猛進，前所未見。令你大為驚豔的晶片更加碼機器學習技術，並突破智慧型手機所能成就的極限。第一部威力強大，Pro 如其名的 iPhone，全新登場。',
    brand: {
      name: 'Apple',
    },
    aggregateRating: {
      ratingValue: '4.6',
      reviewCount: '120',
    },
    offers: {
      priceCurrency: 'TWD',
      price: '26,900',
    },
  };

  const { name, description } = product;

console.log(name);       
console.log(description);

const counters = Array.from({length:10},(_, index)=>index);
const {useState} = React;
const Counter = () =>{
    const [count,setCount]=useState(6);
    return(
        <div className='container-a'>
            {console.log('render',count)}
            <div className={`chevron chevron-up ${count >=20 && 'hidden'}`}
            onClick={ ()=>{
                setCount(count+1);
             }
            } 
            />
            <div className='number'>{count}</div>
            <div className= {`chevron chevron-down   ${count <=0 && 'hidden'}`}
             onClick={ ()=>{
                setCount(count-1);
             }
            } 
            />
        </div>
    );
};
ReactDOM.render(
    <div className='test'>
    {counters.map((item)=>(
        <Counter/>
    ))}
    </div>
    ,document.getElementById('root2')
)


const UnitControl =()=>(
    <div className="unit-control">
    <div className="unit">Mbps</div>
    <span className="exchange-icon fa-fw fa-stack">
      <i className="far fa-circle fa-stack-2x" />
      <i className="fas fa-exchange-alt fa-stack-1x" />
    </span>
    <div className="unit">Mb/s</div>
  </div>
);
const CardFooter = (props) =>{
    const { inputValue } = props;
    let criteria ;
    
    if (!inputValue) {
        criteria = {
            title:'----',
            backgroundColor:'#d3d8e2',
        };
    } else if (inputValue < 15) {
        criteria = {
          title: 'SLOW',
          backgroundColor: '#ee362d',
        };
      } else if (inputValue < 40) {
        criteria = {
          title: 'GOOD',
          backgroundColor: '#1b82f1',
        };
      } else if (inputValue >= 40) {
        criteria = {
          title: 'FAST',
          backgroundColor: '#13d569',
        };
      }
    return(
    <div className="card-footer"
    style={{backgroundColor:criteria.backgroundColor}}
    >
       {criteria.title}
        </div>
    );
}
    

const SpeedConverter = () => {
    // STEP 2: 定義 state，取得預設值為 0 的 inputValue 和修改該狀態的 setInputValue 方法
    const [inputValue, setInputValue] = useState(0);
  
    // STEP 3: 定義事件處理器
    const handleInputChange = (e) => {
      // STEP 3-1: 取出使用者輸入的值
      const { value } = e.target;
  
      // STEP 3-2: 將這個值設定到 state 中
      setInputValue(value);
    };
  
    return (
      <div className="container">
        <div className="card-header">Network Speed Converter</div>
        <div className="card-body">
         <UnitControl/>
          <div className="converter">
            <div className="flex-1">
              <div className="converter-title">Set</div>
              {/* STEP 4: 把事件處理器綁定進去，並且把 value 帶入 */}
              <input
                type="number"
                onChange={handleInputChange}
                value={inputValue}
                className="input-number"
                min="0"
              />
            </div>
            <span
              className="angle-icon fa-2x"
              style={{
                marginTop: 30,
              }}
            >
              <i className="fas fa-angle-right" />
            </span>
            <div className="text-right flex-1">
              <div className="converter-title">Show</div>
              {/* STEP 5: 把使用者輸入的值顯示於畫面上 */}
              <input
                className="input-number text-right"
                type="text"
                value={inputValue/8}
                disabled
              />
            </div>
          </div>
        </div>
       <CardFooter inputValue={inputValue} />
      </div>
    );
  };
  
  ReactDOM.render(<SpeedConverter />, document.getElementById('root3'));
