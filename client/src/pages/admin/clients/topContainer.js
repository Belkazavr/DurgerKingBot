import { memo, useState, useCallback, useEffect } from "react";
import { Box, IconButton, Input } from "@components";
import { areEqualObject } from "@utils/areRender";
import { useClientsContext } from "@context";
import { isFunc } from "@utils";

const Default = memo((props) => {
  const { select, selectCount, onClear, onSearch } = props;

  const { dialog } = useClientsContext();
  const [data, setData] = useState({});

  useEffect(() => {
    if (data?.search !== null && data?.search !== undefined) {
      isFunc(onSearch, data?.search);
    }
  }, [data]);

  const handleOnDelete = () => {
    dialog.setIsShowDelete(true, {
      select: select.map((item) => item.id),
      onClear,
      onGetText: () => select.map((item) => item.caption).join(",\n"),
    });
  };

  const handleChange = useCallback((param) => {
    return (event) => {
      setData((prev) => {
        prev[param] = event.target.value;
        return { ...prev };
      });
    };
  }, []);

  return (
    <Box
      sx={{ display: "flex", alignItems: "center", width: "100%" }}
      name="TOP CONTAINER"
    >
      <Input
        sx={{ marginLeft: 1 }}
        name="search"
        caption="Поиск по названию"
        data={data}
        onChange={handleChange}
        changeOnEnter
      />
      <Box sx={{ flexGrow: 1 }} />
      <IconButton
        textIcon="delete"
        color="error"
        onClick={handleOnDelete}
        edge={false}
        disabled={selectCount === 0}
      />
    </Box>
  );
}, areEqualObject);

export default Default;
