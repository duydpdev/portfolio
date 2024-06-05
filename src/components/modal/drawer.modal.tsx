import { Drawer } from "antd";

export default function DrawerModal({
  onClose,
  open,
  title,
  children,
}: {
  onClose: () => void;
  open: boolean;
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Drawer title={title} onClose={onClose} open={open}>
        {children}
      </Drawer>
    </>
  );
}
