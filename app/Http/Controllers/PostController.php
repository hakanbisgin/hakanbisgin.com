<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Foundation\Application;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): View|Factory|Application
    {
        return view('posts.index', ['posts' => Post::all()]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): View|Factory|Application
    {
        return view('posts.edit', (new Post())->toArray());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $post = new Post($request->only(['title', 'body']));
        $post->save();
        return redirect()->route('posts.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post): View|Factory|Application
    {
        return view('posts.show', $post->toArray());
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Post $post): View|Factory|Application
    {
        return view('posts.edit', $post->toArray());
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Post $post): RedirectResponse
    {
        $post->update($request->only('title', 'body'));
        return redirect()->route('posts.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post): RedirectResponse
    {
        $post->delete();
        return redirect()->back();
    }

    public function changeStatus(Post $post): RedirectResponse
    {
        $post->update(['is_published' => !$post->is_published]);
        return redirect()->back();
    }

    public function guestShow(Post $post): View|Factory|Application
    {
        return view('blog.show', $post->toArray());
    }

    public function blog(): View|Factory|Application
    {
        $posts = Post::query()->where('is_published', 1)->orderByDesc('updated_at')->get();
        return view('blog.index', compact('posts'));
    }
}
