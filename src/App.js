
import { useEffect, useState } from 'react';
import './App.css';

var arr2D = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
];
const disableArr = [
  [9, 1],
  [2, 14],
  [0, 13],
  [0, 14],
  [2, 1],
  [4, 14],
  [5, 14],
  [6, 14],
  [7, 14],
  [8, 14],
  [9, 1], [3, 13], [9, 14], [10, 14], [9.12], [10, 12], [9, 13], [10, 13], [9, 12], [3, 14]
]
const groupChair = [
  {
    label: "Standard",
    range: [0, 3],
    price: 60000,
    color: '#d4d4d4'
  },
  {
    label: "VIP",
    range: [4, 9],
    price: 90000,
    color: '#567b56'
  },
  {
    label: "Deluxe",
    range: [10, 10],
    price: 110000,
    color: '#7c7cff'
  },

]

function App() {
  const [arraySelected, setArraySelected] = useState([])
  const [isFull, setIsFull] = useState(false)
  useEffect(() => {
    console.log({ arraySelected })
    if (arraySelected.length === 6) {
      setIsFull(true)
    }
  }, [arraySelected])
  return (
    <div className="App">
      <header className="App-header">
        {
          arr2D.map((itemRow, index) => {
            let currentGroup;
            for (const itemChair of groupChair) {
              if (index >= itemChair.range[0] && index <= itemChair.range[1]) {
                currentGroup = itemChair
                break;
              }
            }

            return <div style={{ display: 'flex', flexDirection: 'row' }}>
              {
                itemRow.map(itemCol => {
                  for (const itemDisabled of disableArr) {
                    if (index === itemDisabled[0] && itemCol === itemDisabled[1]) {
                      return <div style={{ width: '24px' }}></div>
                    }
                  }
                  return <button
                    onClick={() => {
                      if (isFull === true) {
                        return
                      }
                      setArraySelected([...arraySelected, [index, itemCol]])
                    }}
                    className={`item`}
                    style={{
                      border: `1px solid ${currentGroup.color}`,
                    }}></button>
                })
              }
            </div>



          })
        }


        <div style={{ display: 'flex', justifyContent: 'space-between', width: 360, marginTop: 32 }}>
          <div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 4 }}>
              <div style={{ width: 20, height: 20, background: 'gray', borderRadius: '50%', marginRight: 4 }} />
              Da dat
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <div style={{ width: 20, height: 20, background: 'white', borderRadius: '50%', marginRight: 4 }} />
              Dang chon dat
            </div>
          </div>
          <div style={{ textAlign: 'left' }}>
            {
              groupChair.map(chair => {
                return <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: '4px 0px' }}>
                  <div style={{ width: 24, height: 24, border: `1px solid ${chair.color}`, borderRadius: '50%', marginRight: 4 }} />
                  {chair.label} - {chair.price}d
                </div>
              })
            }
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
