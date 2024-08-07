<?php

use App\Http\Controllers\PostController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/resume', function () {
    return view('resume');
})->name('resume');

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/blog', [PostController::class, 'blog'])->name('blog');
Route::get('/blog/{post}', [PostController::class, 'guestShow'])->name('blog.show');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::prefix('admin')->group(function () {
        Route::get('/posts', [PostController::class, 'index'])->name('posts.index');
        Route::get('/posts/create', [PostController::class, 'create'])->name('posts.create');
        Route::post('/posts', [PostController::class, 'store'])->name('posts.store');
        Route::get('/posts/{post}', [PostController::class, 'show'])->name('posts.show');
        Route::get('/posts/{post}/edit', [PostController::class, 'edit'])->name('posts.edit');
        Route::patch('/posts/{post}', [PostController::class, 'update'])->name('posts.update');
        Route::get('/posts/{post}/delete', [PostController::class, 'destroy'])->name('posts.destroy');
        Route::get('/posts/{post}/change_status', [PostController::class, 'changeStatus'])->name('posts.changeStatus');
    })->name('admin');
});

require __DIR__ . '/auth.php';
