export default function FormSplitBill(){
    return <form className="form-split-bill">
        <h2>Split a bill with X</h2>
        <label>💰 Bill value</label>
        <input type='text'/>
        <label>🤵🏻 Your expense</label>
        <input type='text'/>
        <label>🧔🏻 X's expense</label>
        <input type='text'/>
    </form>
}