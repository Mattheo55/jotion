<?php

namespace App\Http\Controllers;

use App\Models\Notebook;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NotebookController
{
    public function create(Request $requets)
    {
        $requets->validate([
            'name' => 'required|string|max:255',
        ]);

        $notebook = new Notebook();
        $notebook->name = $requets->name;
        $notebook->save();

        return redirect()->route('notebook.show', $notebook);
    }

    public function show(Notebook $notebook)
    {
        return Inertia::render('EmptyState', [
            'activeNotebook' => $notebook,
            'notes' => $notebook->notes()->get(),
        ]);
    }
}