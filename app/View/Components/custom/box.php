<?php

namespace App\View\Components\custom;

use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;

class box extends Component
{

    /**
     * Create a new component instance.
     */
    public function __construct(public $icon = null, public $content = null, public $class = null, public $style = null)
    {
    }

    /**
     * Get the view / contents that represent the component.
     */
    public function render(): View|Closure|string
    {
        return view('components.custom.box');
    }
}
