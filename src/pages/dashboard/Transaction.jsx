import { TextField } from "@mui/material";

const Transaction = () => {
  return (
    <div className="mt-12">
      <div className="mb-12 grid md:grid-cols-2 xl:grid-cols-1">
        <form action="">
          <div className="border border-deep-purple-100 py-8 px-10">
            <TextField
              fullWidth
              id="standard-basic"
              label="Empense"
              variant="standard"
            />
            <TextField
              fullWidth
              id="standard-basic"
              label="Empense"
              variant="standard"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Transaction;
