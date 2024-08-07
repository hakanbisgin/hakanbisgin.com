@extends('theme.theme')
@section('content')
    <div class="grid grid-cols-1 gap-6 lg:gap-8">
        @if($posts->toArray() == [])
            <x-custom.box
                icon='<svg viewBox="0 0 24 24" fill="#FF2D20" xmlns="http://www.w3.org/2000/svg"><g stroke-width="0"></g><g stroke-linecap="round" stroke-linejoin="round"></g><g> <path d="M12 16.99V17M12 7V14M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>'>
                <h2 class="text-xl font-semibold text-black dark:text-white">No Post!</h2>

                <p class="mt-4 text-sm/relaxed">
                    This place is so empty!
                </p>
            </x-custom.box>
        @endif
        @foreach($posts as $post)
            <a href="{{route('blog.show',$post)}}" target="_blank">
                <x-custom.box style="box-shadow: inset -2px 0 6px 1px #FF2D20;" class="relative">
                    <h2 class="text-xl font-semibold text-black dark:text-white">{{$post->title}}</h2>
                    <sup>{{date("F jS, Y", strtotime($post->updated_at))}}</sup>

                    <p class="mt-4 text-sm/relaxed" style="max-height: 15dvh; overflow: hidden">
                        {!! $post->body !!}
                    </p>
                    <div
                        class="absolute bg-gradient-to-b from-transparent via-white to-white dark:via-zinc-900 dark:to-zinc-900"
                        style="width: calc(100% - 2rem); height: 4rem; bottom: 1.25rem; left: 1rem"
                    ></div>
                </x-custom.box>
            </a>
        @endforeach

    </div>
@endsection
