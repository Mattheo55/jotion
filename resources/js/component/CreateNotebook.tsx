import { Folder } from "lucide-react";

interface CreateNotebookProps {
    onSubmit: () => void;
    value: string;
    onTextChange: (t: string) => void;
}

export default function CreateNotebook(
    { onSubmit, value, onTextChange }: CreateNotebookProps,
) {
    return (
        <div className="cursor-pointer hover:bg-gray-500/10 h-10 no-drag flex px-5 gap-3 items-center">
            <Folder size={20} />
            <input
                value={value}
                onChange={(e) => onTextChange(e.target.value)}
                autoFocus
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        onSubmit();
                    }
                }}
            />
        </div>
    );
}
