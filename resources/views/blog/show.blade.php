@extends('theme.theme')
@section('content')
    <div class="grid grid-cols-1 gap-6 lg:gap-8">
        <x-custom.box>
            <div class="flex justify-between">
                <h2 class="text-xl font-semibold text-black dark:text-white mb-4">{{$title}}</h2>
                <sup class="hidden md:block">{{date("F jS, Y", strtotime($updated_at))}}</sup>
            </div>

            {!! $body !!}
        </x-custom.box>
@endsection
