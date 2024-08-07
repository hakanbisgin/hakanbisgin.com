<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            @isset($id)
            Editing -> {{ $title??'' }} -c({{$created_at??''}}) -u({{$updated_at??''}})
            @else
                Creating new Post
            @endisset

        </h2>
    </x-slot>


    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg p-4">
                <form action="{{isset($id)?route('posts.update', $id):route('posts.store')}}" method="post">
                    @csrf
                    @method(isset($id)?'PATCH':'POST')
                    <input type="hidden" name="id" value="{{isset($id)?$id:null}}">
                    <input type="text" name="title" id="title" placeholder="Title" value="{{$title??''}}" style="height: 5rem; font-size: 3rem; width: 100%">
                    <textarea name="body" id="body"> {!! $body??'' !!}
                    </textarea>
                    <button type="submit" style="padding: 10px; background: #2563eb; color: #eee; border-radius: 5px;">Submit</button>
                </form>

            </div>
        </div>
    </div>
</x-app-layout>




<!-- include libraries(jQuery, bootstrap) -->
<link href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" rel="stylesheet">
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>

<!-- include summernote css/js -->
<link href="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote.min.js"></script>


<script>
    $(document).ready(function() {
        $('#body').summernote();
    });
</script>
