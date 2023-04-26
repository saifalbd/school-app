<x-visitor-layout page="contact-page">

    <section class="page-title-area" style="background-image:url('{{asset('images/bannar/contact.jpg')}}');">
        <div class="area-box">
            <h1>
                Contact us
            </h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime tenetur obcaecati aut minima, neque beatae ipsa eaque quo, inventore nihil debitis. Ullam ipsam voluptas perferendis maxime itaque, accusamus quis ex?
            </p>
        </div>

    </section>



    <section class="form-section">
        <form action="{{route('addMe.store')}}" method="post" enctype="multipart/form-data">
            @csrf
            <input type="hidden" name="redirect" value="redirect">
            <div class="container">
                <h1>Feel free to write us</h1>
                <div class="columns is-desktop">
                    <div class="column">
                        <div class="field">
                            <label class="label is-small">Name*</label>
                            <div class="control">
                                <input class="input is-small @error('name') is-danger @enderror" name="name" type="text" placeholder="Name*" value="{{old('name')}}">
                            </div>
                            @error('name')<p class="help is-danger">{{ $message }}</p>@enderror

                        </div>
                    </div>
                    <div class="column">
                        <div class="field">
                            <label class="label is-small">Passed Year*</label>
                            <div class="control">
                                <input class="input is-small @error('year') is-danger @enderror" name="year" type="mumber" placeholder="Pass Year*" value="{{old('year')}}">
                            </div>
                            @error('year')<p class="help is-danger">{{ $message }}</p>@enderror
                        </div>
                    </div>


                </div>
                <div class="columns is-desktop">
                    <div class="column">
                        <div class="field">
                            <label class="label is-small">Email*</label>
                            <div class="control">
                                <input class="input is-small @error('email') is-danger @enderror" name="email" type="text" placeholder="Email*" value="{{old('email')}}">
                            </div>
                            @error('email')<p class="help is-danger">{{ $message }}</p>@enderror
                        </div>
                    </div>
                    <div class="column">
                        <div class="field">
                            <label class="label is-small">Phone*</label>
                            <div class="control">
                                <input class="input is-small @error('phone') is-danger @enderror" name="phone" type="text" placeholder="Phone*" value="{{old('phone')}}">
                            </div>
                            @error('phone')<p class="help is-danger">{{ $message }}</p>@enderror
                        </div>
                    </div>
                </div>
                <div class="columns is-desktop">
                    <div class="column">
                        <div class="field">
                            <label class="label is-small">Profession*</label>
                            <div class="control">
                                <input class="input is-small @error('profession') is-danger @enderror" name="profession" type="text" placeholder="Profession*" value="{{old('profession')}}">
                            </div>
                            @error('profession')<p class="help is-danger">{{ $message }}</p>@enderror
                        </div>
                    </div>
                    <div class="column">
                        <div class="field">
                            <label class="label is-small">Organization Name*</label>
                            <div class="control">
                                <input class="input is-small @error('organization') is-danger @enderror" name="organization" type="text" placeholder="Organization Name*" value="{{old('organization')}}">
                            </div>
                            @error('organization')<p class="help is-danger">{{ $message }}</p>@enderror
                        </div>
                    </div>
                    <div class="column">
                        <div class="field">
                            <label class="label is-small">Designation*</label>
                            <div class="control">
                                <input class="input is-small @error('designation') is-danger @enderror" name="designation" type="text" placeholder="Designation*" value="{{old('designation')}}">
                            </div>
                            @error('designation')<p class="help is-danger">{{ $message }}</p>@enderror
                        </div>
                    </div>
                </div>
                <div class="columns is-desktop">
                    <div class="column">
                        <div class="field">
                            <label class="label is-small">District*</label>
                            <div class="control">
                                <input class="input is-small @error('district') is-danger @enderror" name="district" type="text" placeholder="District*" value="{{old('district')}}">
                            </div>
                            @error('district')<p class="help is-danger">{{ $message }}</p>@enderror
                        </div>
                    </div>
                    <div class="column">
                        <div class="field">
                            <label class="label is-small">Thana*</label>
                            <div class="control">
                                <input class="input is-small @error('thana') is-danger @enderror" name="thana" type="text" placeholder="Thana*" value="{{old('thana')}}">
                            </div>
                            @error('thana')<p class="help is-danger">{{ $message }}</p>@enderror
                        </div>
                    </div>
                </div>
                <div class="columns is-desktop">
                    <div class="column">
                        <div class="field">
                            <label class="label is-small">Present address*</label>
                            <div class="control">
                                <input class="input is-small" name="address" type="text" placeholder="Present address*" value="{{old('address')}}">
                            </div>
                            @error('address')<p class="help is-danger">{{ $message }}</p>@enderror
                        </div>
                    </div>
                </div>
                <div class="columns is-desktop">
                    <div class="column">
                        <div class="field">
                            <label class="label is-small">Permanent Address*</label>
                            <div class="control">
                                <input class="input is-small" name="address_perm" type="text" placeholder="Permanent Address*" value="{{old('address_perm')}}">
                            </div>
                            @error('address_perm')<p class="help is-danger">{{ $message }}</p>@enderror
                        </div>
                    </div>
                </div>
                <div class="columns is-desktop">
                    <div class="column add-me-file-box" id="fileBox">
                        <div class="image-box" style="display:none;">
                            <img src="" alt="" srcset="">
                        </div>

                        <div class="file has-name is-boxed  @error('avatar') is-danger @enderror">
                            <label class="file-label">
                                <input class="file-input" type="file" name="avatar">
                                <span class="file-cta">
                                    <span class="file-icon">
                                        <i class="fas fa-upload"></i>
                                    </span>
                                    <span class="file-label">
                                        Choose a file…
                                    </span>
                                </span>
                                <span class="file-name">
                                    
                                </span>
                            </label>
                        </div>
                        @error('avatar')<p class="help is-danger">{{ $message }}</p>@enderror

                    </div>
                </div>
                <div class="field">
                    <label class="label">Note</label>
                    <div class="control">
                        <textarea class="textarea" name="note" placeholder="Textarea"></textarea>
                    </div>
                </div>
                <div class="field">
                    <div class="control">
                        <button type="submit" class="button is-link">Submit</button>
                    </div>

                </div>


            </div>
        </form>
    </section>


</x-visitor-layout>