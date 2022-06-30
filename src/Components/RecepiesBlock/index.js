export default function RecepiesBlock() {
  return (
    <div>
      <main className="h-auto w-auto">
        <div>
            <div className="mb-2 w-auto">
              <img
                className="object-cover relative h-32 w-32 rounded-lg"
                alt="test"
                src="https://i.ibb.co/B2Sv2HQ/f-5.jpg"
              /> 
            </div>
          <label className="text-sm font-semibold text-black">My cooking</label>
          <br/>
          <label className="text-xs font-semibold text-black">47 recepies</label>
        </div>
      </main>
    </div>
  );
}
