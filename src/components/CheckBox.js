const { useState } = require("react");

const CheckBox = () => {
    const [check, setCheck] = useState({
        check1: false,
        check2: false,
        check3: false,
    });

    return (
        <div>
            <input type="checkbox" id="selectAll" checked={check.check1 && check.check2 && check.check3} onChange={() => {
                setCheck(
                    {
                        check1: !check.check1,
                        check2: !check.check2,
                        check3: !check.check3,
                    }
                )
            }} />
            <label htmlFor="selectAll">Select All</label>
            <br />


            <input
                id="check1"
                type="checkbox"
                checked={check.check1}
                onChange={() => {
                    setCheck({ ...check, check1: !check.check1 });
                }}
            />
            <br />
            <input
                id="check2"
                type="checkbox"
                checked={check.check2}
                onChange={() => {
                    setCheck({ ...check, check2: !check.check2 });
                }}
            />
            <br />
            <input
                id="check3"
                type="checkbox"
                checked={check.check3}
                onChange={() => {
                    setCheck({ ...check, check3: !check.check3 });
                }}
            />
        </div>
    );
};

export default CheckBox;
