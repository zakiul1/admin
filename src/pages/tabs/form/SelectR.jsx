import React from "react";

const SelectR = () => {
  return (
    <Select
      variant="standard"
      label="Parent"
      onChange={(val) => setFormData({ ...formData, parent: val })}
    >
      {data ? (
        data.map((option) => (
          <Option key={option.id} value={option.id.toString()}>
            {option.name}
          </Option>
        ))
      ) : (
        <Option value={formData.parent}>Parent</Option>
      )}
    </Select>
  );
};

export default SelectR;
