import Modal from "./modal";
import { Button } from "./ui/button";

interface SaveModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  loading: boolean;
}

const SaveModal = ({ isOpen, onClose, onConfirm, loading }: SaveModalProps) => {
  return (
    <Modal
      title="Are you sure?"
      description="This action cannot be undone you can't edit or re-answer this question again!"
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="pt-6 space-x-2 flex items-center justify-end w-full text-white">
        <Button
          disabled={loading}
          variant={"outline"}
          onClick={onClose}
          className="text-white hover:text-white"
        >
          Cancel
        </Button>
        <Button disabled={loading} className="text-white" onClick={onConfirm}>
          Continue
        </Button>
      </div>
    </Modal>
  );
};

export default SaveModal;
