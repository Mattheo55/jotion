<?php

use App\Http\Controllers\NotebookController;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'EmptyState')->name('home');

Route::get('/notebooks/{notebook}', [NotebookController::class, 'show'])->name('notebook.show');
Route::post('/notebooks', [NotebookController::class, 'create'])->name('notebook.create');