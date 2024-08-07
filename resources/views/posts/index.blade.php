<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Posts') }}
        </h2>
    </x-slot>


    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg p-4">

                <a href="{{route('posts.create')}}" style=" background: #3e3;padding: .5rem; border-radius: .5rem" class="font-sans">New</a>
                @foreach($posts as $post)
                    <x-custom.box class="mt-4">
                        <h2 class="text-xl font-semibold text-black dark:text-white mt-4">{{ $post->title }}</h2>
                        <p class="mt-4 text-sm/relaxed"
                           style="color: deepskyblue; max-height: 20dvh; min-height: 200px; overflow: scroll; padding: .5rem; border: none !important; margin-bottom: 2rem">
                            {{ $post->body }}
                        </p>

                        <a href="{{route('posts.show', $post)}}"
                           style="padding: .5rem; background: #bbb; border-radius: .5rem;">Show</a>
                        <a href="{{route('posts.edit', $post)}}"
                           style="padding: .5rem; background: goldenrod; border-radius: .5rem;">Edit</a>
                        <a href="{{route('posts.destroy', $post)}}"
                           style="padding: .5rem; background: red; border-radius: .5rem;">Delete</a>
                        <a href="{{route('posts.changeStatus', $post)}}"
                           style="padding: .5rem; background: {{$post->is_published?'green':'darkslategray'}}; border-radius: .5rem;">{{$post->is_published?'Published':'Draft'}}</a>
                    </x-custom.box>

                @endforeach
            </div>
        </div>
    </div>
</x-app-layout>
