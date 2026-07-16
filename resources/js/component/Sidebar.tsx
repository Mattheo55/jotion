import { Notebook } from "@/types/notebook";
import { router, usePage } from "@inertiajs/react";
import {FolderPlus, Plus} from "lucide-react";
import Colors from "tailwindcss/colors"
import NotebookButton from "./NotebookButton";
import { useState } from "react";
import CreateNotebook from "./CreateNotebook";
import notebook from "@/routes/notebook";

export default function Sidebar() {
    const {notebooks, activeNotebook} = usePage<{notebooks: Notebook[], activeNotebook?: Notebook}>().props;

    const [showCreateNotebook, setShowCreateNotebook] = useState<boolean>(false);
    const [newName, setNewName] = useState<string>('');

    const handlePress = () => {
        router.post('/notebooks', {name: newName});
        setShowCreateNotebook(false);
        setNewName("");
    }

    const handleChangeNotebook = (notebook: Notebook) => {
        router.get(`/notebooks/${notebook.id}`);
    }

  return (
    <div className='bg-[#181818] w-70 drag text-white h-full'>
        <div className='p-8'>
            <p className='text-3xl font-extrabold'>Jotion</p>
        </div>

        <div className='px-5'>
            <button className='bg-[#242424] hover:bg-[#323232] flex items-center justify-center gap-4 w-full h-10 no-drag cursor-pointer rounded'>
                <Plus />
                Nouvelle Note
            </button>
        </div>

        <div className='mt-8 overflow-y-auto flex-1 no-drag'>
            <div className='px-5 flex justify-between flex-row'>
                <p className='text-white/60'>Carnet</p>
                <button onClick={() => setShowCreateNotebook(true)} className="cursor-pointer no-drag"><FolderPlus color="#747474"/></button>
            </div>
            <div className="flex flex-col mt-2">
                {showCreateNotebook && <CreateNotebook value={newName} onTextChange={setNewName} onSubmit={handlePress} />}
                {
                    notebooks.map(n => (
                        <NotebookButton key={n.id} notebook={n} onPress={handleChangeNotebook} active={activeNotebook?.id === n.id}/>
                    ))
                }
            </div>
        </div>
    </div>
  )
}
